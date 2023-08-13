import React, { useState, useEffect } from 'react';

function PmShowList() {
  const [pmShowList, setPmShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerRow = 2; // 한 줄에 표시할 아이템 개수
  const rowsPerPage = 3; // 페이지 당 표시할 줄 수
  const itemsPerPage = itemsPerRow * rowsPerPage; // 한 페이지에 표시할 아이템 수

  // 백엔드에서 모든 공연 목록을 가져온 후에 호출되는 효과
  useEffect(() => {
    // API에서 모든 공연 목록을 가져오는 함수가 필요합니다.
    fetch('/pmshow/list')
      .then(response => response.json())
      .then(data => {
        setPmShowList(data); // 모든 데이터를 가져와서 저장합니다.
      });
  }, []);

  // 현재 페이지에서 보여줄 아이템을 계산하는 함수
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return pmShowList.slice(startIndex, endIndex);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(pmShowList.length / itemsPerPage);

  // 페이지 변경 처리
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>공연 목록</h1>
      <div style={spacerStyle}></div> {/* 여백 추가 */}
      <div style={listContainerStyle}>
        {getCurrentItems().map(pmShow => (
          <div key={pmShow.pmShowId} style={itemStyle}>
            <img src={pmShow.poster} alt={`${pmShow.title} 포스터`} style={posterStyle} />
            <div style={showTitleStyle} title={pmShow.title}>{pmShow.title}</div>
          </div>
        ))}
      </div>
      <div style={spacerStyle}></div> {/* 여백 추가 */}
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
  maxWidth: '800px',  // 최대 너비 조정
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '28px', // 글자 크기 조정
  marginBottom: '20px',
};

const listContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap', // 아이템들을 여러 줄로 나열
  justifyContent: 'space-between', // 각 줄 사이 간격을 맞춤
  alignItems: 'center', // 아이템들 수직 중앙 정렬
};

const itemStyle = {
  borderRadius: '5px',
  padding: '10px',
  margin: '10px 0',
  width: '48%', // 한 줄에 두 개씩 배치되도록 너비 설정
  textAlign: 'center', // 가운데 정렬 추가
};

const showTitleStyle = {
  fontSize: '14px', // 공연 제목 글자 크기 조정
  whiteSpace: 'nowrap', // 줄바꿈 방지
  overflow: 'hidden', // 넘치는 부분 감춤
  textOverflow: 'ellipsis', // 넘치면 ... 표시
};

const paginationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const paginationButtonStyle = {
  fontSize: '16px', // 페이지네이션 버튼 글자 크기 조정
  marginLeft: '5px',
  marginRight: '5px',
  cursor: 'pointer',
};

const spacerStyle = {
  height: '20px', // 여백의 높이
};

const posterStyle = {
  width: '100%', // 포스터 이미지 너비 조정
  height: 'auto', // 자동 높이 조정
  marginBottom: '10px', // 포스터 아래 여백 추가
};



export default PmShowList;
