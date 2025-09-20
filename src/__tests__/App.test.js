import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
    localStorageMock.setItem.mockClear();
    localStorageMock.clear();
    // Clear any existing DOM
    document.body.innerHTML = '';
  });

  test('renders app header', () => {
    render(<App />);
    expect(screen.getByText('DevOps Todo App')).toBeInTheDocument();
    expect(screen.getByText('Ứng dụng Todo đơn giản để học CI/CD Pipeline')).toBeInTheDocument();
  });

  test('shows empty state when no todos', () => {
    render(<App />);
    expect(screen.getByText('Chưa có công việc nào')).toBeInTheDocument();
    expect(screen.getByText('Hãy thêm công việc đầu tiên của bạn!')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Thêm công việc mới...');
    const addButton = screen.getByText('Thêm');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getByText('Tổng cộng')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<App />);
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Thêm công việc mới...');
    fireEvent.change(input, { target: { value: 'Toggle todo' } });
    fireEvent.click(screen.getByText('Thêm'));

    // Toggle completion
    const checkboxes = screen.getAllByRole('checkbox');
    const todoCheckbox = checkboxes[0]; // First checkbox is the todo item
    fireEvent.click(todoCheckbox);

    expect(todoCheckbox).toBeChecked();
    expect(screen.getByText('Đã hoàn thành')).toBeInTheDocument();
  });

  test('can delete a todo', () => {
    render(<App />);
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Thêm công việc mới...');
    fireEvent.change(input, { target: { value: 'Delete me' } });
    fireEvent.click(screen.getByText('Thêm'));

    // Verify todo was added
    expect(screen.getByText('Delete me')).toBeInTheDocument();

    // Delete the todo
    const deleteButtons = screen.getAllByText('Xóa');
    fireEvent.click(deleteButtons[deleteButtons.length - 1]); // Click last delete button

    // Check that todo was removed
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
  });
});
