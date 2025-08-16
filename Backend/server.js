const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🟡 Supabase setup
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SUPABASE_ANON_KEY;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);


// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ GET: Fetch templates from Supabase
app.get('/api/templates', async (req, res) => {
  const { data, error } = await supabase.from('templates').select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json({ templates: data });
});

// ✅ (Optional) Health check
app.get('/', (req, res) => {
  res.send('✅ Resume Builder API is live');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
