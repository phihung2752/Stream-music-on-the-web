// File: src/index.js

import { initializeAuth } from './api/auth.js';
import { loadAlbums } from './api/albums.js';
import { loadPlaylists } from './api/playlists.js';
import { loadTracks } from './api/tracks.js';
import { loadUser } from './api/user.js';

import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Player from './components/Player.js';

import { renderHome } from './containers/Home.js';
import { renderDiscover } from './containers/Discover.js';

// Khởi tạo các chức năng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    // Gọi các hàm cần thiết từ các module khác
    initializeAuth();
    loadAlbums();
    loadPlaylists();
    loadTracks();
    loadUser();

    // Khởi tạo các component
    const navbar = new Navbar();
    const sidebar = new Sidebar();
    const player = new Player();

    // Render trang Home hoặc Discover
    renderHome();
    // hoặc
    // renderDiscover();
});
