// server/routes/counselling.js
// Express API endpoints for KutumbSkill Multi-language AI Counselling & Admin Sentiment Platform

const express = require('express');
const router = express.Router();
const {
  processCounsellingMessage,
  createCounsellorEscalation,
  getAdminAnalytics,
  getAiEngineStatus,
  VERIFIED_TRADES,
  LOCAL_ALUMNI_STORIES,
  OBJECTION_TAXONOMY
} = require('../services/counsellingService');

/**
 * POST /api/counselling/chat
 * Multi-language conversational AI counselling endpoint with dual-persona switching
 */
router.post('/chat', async (req, res) => {
  try {
    const {
      sessionId,
      message,
      persona = 'parent',
      language = 'hi',
      selectedTradeId,
      district,
      state
    } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    const response = await processCounsellingMessage({
      sessionId,
      message,
      persona,
      language,
      selectedTradeId,
      district,
      state
    });

    return res.json({ success: true, data: response });
  } catch (err) {
    console.error('Counselling Chat Error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/counselling/status
 * Check Google Gemini AI engine activation status and configuration
 */
router.get('/status', (req, res) => {
  try {
    const status = getAiEngineStatus();
    return res.json({ success: true, ...status });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/counselling/trades
 * Retrieve all verified vocational trades with outcomes
 */
router.get('/trades', (req, res) => {
  try {
    return res.json({ success: true, count: VERIFIED_TRADES.length, trades: VERIFIED_TRADES });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/counselling/trades/:id
 * Retrieve specific trade details with NSQF progression ladder
 */
router.get('/trades/:id', (req, res) => {
  try {
    const trade = VERIFIED_TRADES.find(t => t.id === req.params.id);
    if (!trade) {
      return res.status(404).json({ success: false, error: 'Trade not found.' });
    }
    return res.json({ success: true, trade });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/counselling/stories
 * Retrieve verified local alumni & parent social proof
 */
router.get('/stories', (req, res) => {
  try {
    const { lang } = req.query;
    let stories = LOCAL_ALUMNI_STORIES;
    if (lang) {
      stories = stories.filter(s => s.language === lang);
    }
    return res.json({ success: true, stories });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/counselling/escalate
 * Trigger human counsellor callback with AI summary
 */
router.post('/escalate', (req, res) => {
  try {
    const escalation = createCounsellorEscalation(req.body);
    return res.json({
      success: true,
      message: 'Escalation request registered. Certified local counsellor will reach out within 2 hours.',
      escalation
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/counselling/analytics
 * Retrieve scheme administrator sentiment & resistance heatmap
 */
router.get('/analytics', (req, res) => {
  try {
    const analytics = getAdminAnalytics();
    return res.json({ success: true, data: analytics });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
