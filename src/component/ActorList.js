import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ActorList = () => {
  const [actorList, setActorList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [likedActors, setLikedActors] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const paginationSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/actor/list/pm'); 
        setActorList(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        setLoading(false);
      } catch (error) {
        console.error('Error loading actor list:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    updateSearchResults();
  }, [searchQuery, actorList]);

  const handleLikeClick = async (actorId) => {
    try {
      await axios.post(`/actor/${actorId}/like`);
      setLikedActors((prevLikedActors) => [...prevLikedActors, actorId]);
  
      // 좋아요를 누른 후에 해당 배우의 좋아요 상태를 서버에서 다시 가져와서 업데이트
      const response = await axios.get(`/actor/${actorId}`);
      const updatedActor = response.data;
      const updatedActorList = actorList.map((actor) => {
        if (actor.actorId === updatedActor.actorId) {
          return updatedActor;
        }
        return actor;
      });
      setActorList(updatedActorList);
    } catch (error) {
      console.error('Error liking actor:', error);
    }
  };

  const updateSearchResults = () => {
    if (searchQuery.trim() === '') {
      setSearchResults(actorList);
      return;
    }
  
    const filteredActors = (actorList || []).filter(
      (actor) =>
        actor.actorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (actor.bio && actor.bio.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setSearchResults(filteredActors);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderPagination = () => {
    const pageButtons = [];
    for (let i = 0; i < Math.min(totalPages, paginationSize); i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={i === currentPage}
          style={paginationButtonStyle}
        >
          {i + 1}
        </button>
      );
    }
    return pageButtons;
  };

  const firstItemIndex = currentPage * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const displayedActors = (searchResults || []).slice(firstItemIndex, lastItemIndex);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>전체 배우 목록</h1>

      <ul style={listStyle}>
        {displayedActors.map((actor) => (
          <li key={actor.actorId} style={itemStyle}>
            <div style={actorInfoContainerStyle}>
              <Link to={`/actor/${actor.actorId}`} style={actorLinkStyle}>
                {actor.actorName}
              </Link>
              <div style={likeButtonContainerStyle}>
                <button
                  onClick={() => handleLikeClick(actor.actorId)}
                  disabled={likedActors.includes(actor.actorId)}
                  style={likeButtonStyle}
                >
                  {likedActors.includes(actor.actorId) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="배우 이름 또는 소개글을 검색해보세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInputStyle}
        />
      </div>

      <div style={paginationContainerStyle}>
        {renderPagination()}
      </div>
    </div>
  );
};

// 스타일 및 export 부분은 생략

const containerStyle = {
  width: '80%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
};

const paginationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const paginationButtonStyle = {
  fontSize: '12px', // 페이지네이션 버튼 글자 크기 조정
  marginLeft: '3px',
  marginRight: '3px',
  cursor: 'pointer',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px 0',
};

const actorLinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const searchContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const searchInputStyle = {
  padding: '10px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const likeButtonStyle = {
  fontSize: '20px',
  marginLeft: '10px',
  marginRight: '10px', // 오른쪽 여백 추가
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
};

const likeButtonContainerStyle = {
  marginLeft: 'auto', // 오른쪽으로 이동
  display: 'flex',
  alignItems: 'center', // 버튼 수직 정렬
};

const actorInfoContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default ActorList;
