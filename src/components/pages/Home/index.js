import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeTemplate from '../../templates/Home';
import img from '../../../assets/images/profil.png';
import LineApi from '../../../api/Line';

const Home = () => {
  const { tab } = useParams();
  const [data, setData] = useState(null);
  const [menus, setMenus] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await LineApi.getDataByCategory('TOP');
      const resultMenu = await LineApi.getCategoryList();
      setMenus(resultMenu);
      setData(result);
    })();
  }, []);

  return (data && menus) && (
    <HomeTemplate
      navbarAvatar={img}
      sideMenuItems={menus}
      showSidebar={sidebarOpen}
      navbarActiveLink={tab}
      articlesSection={data}
      postOnclick={(url) => console.log(url)}
      toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
    />
  );
};

export default Home;
