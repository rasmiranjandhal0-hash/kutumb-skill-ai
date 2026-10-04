// server/index.js
// KutumbSkill AI (कुटुंब Skill) - Multi-Language Vocational Counselling & Parental Sentiment Platform
// NCVET / NSQF Aligned Skilling Intelligence Server

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const os = require('os');

const counsellingRouter = require('./routes/counselling');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Global Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve Static Frontend Assets
const PUBLIC_DIR = path.join(__dirname, '../public');
app.use(express.static(PUBLIC_DIR));

// API Routes for Vocational Counselling Platform
app.use('/api/counselling', counsellingRouter);

// Main Single Page Application & Alternate Names
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')));
app.get('/counsel', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'counselling.html')));
app.get('/kutumb', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'counselling.html')));
app.get('/chat', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'counselling.html')));

// Dedicated Feature Pages
app.get('/degree-vs-trade', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));
app.get('/calculator', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));
app.get('/roi', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));
app.get('/bhavishya', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));
app.get('/degree', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));
app.get('/trade', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'calculator.html')));

app.get('/room', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'room.html')));
app.get('/family-room', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'room.html')));

app.get('/trades', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'trades.html')));
app.get('/verified-trades', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'trades.html')));

app.get('/admin', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'admin.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'admin.html')));
app.get('/admin-counselling', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'admin.html')));

// Helper to get local network IP for mobile testing
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const server = app.listen(PORT, HOST, () => {
  const localIp = getLocalIp();
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🏛️  KUTUMBSKILL AI (कुटुंब Skill) - NATIONAL COUNSELLING PLATFORM');
  console.log('   Empowering Families & Youth in Vocational Training & NSQF Ladders');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🌐 Main AI Counselling:     http://localhost:${PORT}/`);
  console.log(`👥 Joint Family Chatroom:   http://localhost:${PORT}/room`);
  console.log(`⚖️ Degree vs Trade Visual:   http://localhost:${PORT}/degree-vs-trade`);
  console.log(`📋 Verified Trades Catalog: http://localhost:${PORT}/trades`);
  console.log(`📊 Admin Resistance Heatmap: http://localhost:${PORT}/admin`);
  console.log(`📱 LAN Mobile Network URL:  http://${localIp}:${PORT}/`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✓ Languages: Hindi, Marathi, Tamil, Telugu, Bengali, English`);
  console.log(`✓ Voice Engine: Regional Speech Synthesis & Mic STT Enabled`);
  console.log(`✓ Verified Dataset: NCVET & NSDC Grounded Placement Records`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});

module.exports = { app, server };
