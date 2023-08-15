import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PmShowList() {
  const [pmShowList, setPmShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerRow = 2;
  const rowsPerPage = 3;
  const itemsPerPage = itemsPerRow * rowsPerPage;

  useEffect(() => {
    fetch('/pmshow/list')
      .then(response => response.json())
      .then(data => {
        setPmShowList(data);
      });
  }, []);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pmShowList.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(pmShowList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>전체 공연 목록</h1>
      <div style={spacerStyle}></div> {}
      <div style={listContainerStyle}>
        {getCurrentItems().map(pmShow => (
          <div key={pmShow.pmShowId} style={itemStyle}>
            <Link to={`/pmShow/${pmShow.pmShowId}`}>
              <img src={pmShow.poster} alt={`${pmShow.title} 포스터`} style={posterStyle} />
            </Link>
            <div style={showTitleStyle} title={pmShow.title}>{pmShow.title}</div>
          </div>
        ))}
      </div>
      <div style={spacerStyle}></div> {}
      <div style={paginationContainerStyle}>
        {/* 페이지네이션 컴포넌트 */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            style={paginationButtonStyle}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  width: '80%',
  maxWidth: '800px', 
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '28px',
  marginBottom: '20px',
};

const listContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', 
  alignItems: 'center', 
};

const itemStyle = {
  borderRadius: '5px',
  padding: '10px',
  margin: '10px 0',
  width: '48%', 
  textAlign: 'center',
};

const showTitleStyle = {
  fontSize: '14px', 
  whiteSpace: 'nowrap', 
  overflow: 'hidden', 
  textOverflow: 'ellipsis',
};

const paginationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const paginationButtonStyle = {
  fontSize: '16px',
  marginLeft: '5px',
  marginRight: '5px',
  cursor: 'pointer',
};

const spacerStyle = {
  height: '20px', 
};

const posterStyle = {
  width: '100%', 
  height: 'auto', 
  marginBottom: '10px',
};



export default PmShowList;
