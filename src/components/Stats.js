import React from 'react';

function Stats({ todos, onClearCompleted }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="stats">
      <h3>Thống kê công việc</h3>
      <div className="stats-info">
        <div className="stat-item">
          <div className="stat-number">{totalTodos}</div>
          <div className="stat-label">Tổng cộng</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{pendingTodos}</div>
          <div className="stat-label">Chưa hoàn thành</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{completedTodos}</div>
          <div className="stat-label">Đã hoàn thành</div>
        </div>
      </div>
      {completedTodos > 0 && (
        <button
          onClick={onClearCompleted}
          style={{
            marginTop: '15px',
            padding: '10px 20px',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Xóa công việc đã hoàn thành ({completedTodos})
        </button>
      )}
    </div>
  );
}

export default Stats;
