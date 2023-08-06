import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PmShowList = () => {
  const [pmShowList, setPmShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    loadPmShowList(currentPage);
  }, [currentPage]);

  const loadPmShowList = async (page) => {
    try {
      const response = await axios.get(`/pmshow/list?page=${page}`);
      setPmShowList(response.data.content);
    } catch (error) {
      console.error('Error loading pmShow list:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>공연 목록</h1>
      <div style={cardContainerStyle}>
        {pmShowList.map((pmShow) => (
          <div key={pmShow.id} style={cardStyle}>
            <h3>{pmShow.title}</h3>
            <p>{pmShow.description}</p>
          </div>
        ))}
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => setCurrentPage((prev) => prev - 1)}>이전 페이지</button>
        <button style={buttonStyle} onClick={() => setCurrentPage((prev) => prev + 1)}>다음 페이지</button>
      </div>
    </div>
  );
};

const containerStyle = {
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  maxWidth: '300px',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 5px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default PmShowList;
