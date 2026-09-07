const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', // यहाँ से 'node server.js' का कचरा हटा दिया है
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// ------------------------- GET METHOD ----------------------------------
app.get('/api/articles/:name', async (req, res) => {
    let client;
    try {
        const articleName = req.params.name;
        client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
        
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching article', error });
    } finally {
        if (client) await client.close();
    }
});

// -------------------------- UPVOTE SECTION -----------------------
app.post('/api/articles/:name/upvote', async (req, res) => {
    let client;
    try {
        client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne(
            { name: articleName },
            { '$set': { upvotes: (articleInfo.upvotes || 0) + 1 } }
        );

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error upvoting', error });
    } finally {
        if (client) await client.close();
    }
});

// ------------------------------- DOWNVOTES SECTION ------------------------------
app.post('/api/articles/:name/downvotes', async (req, res) => {
    let client;
    try {
        client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne(
            { name: articleName },
            { '$set': { downvotes: (articleInfo.downvotes || 0) + 1 } }
        );

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error downvoting', error });
    } finally {
        if (client) await client.close();
    }
});

// ================= NEW: EDIT COMMENT SECTION (FIXED WITH REQUIRE) =================
app.put('/api/articles/:name/edit-comment', async (req, res) => {
    let client;
    try {
        const articleName = req.params.name;
        const { commentIndex, text } = req.body;

        client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        if (!articleInfo) {
            return res.status(404).json({ message: 'Article not found' });
        }

        
        await db.collection('articles').updateOne(
            { name: articleName },
            {
                $set: {
                    [`comments.${commentIndex}.text`]: text
                }
            }
        );

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error editing comment', error: error.message });
    } finally {
        if (client) {
            await client.close();
        }
    }
});

// ----------------------- DELETE SECTION --------------------------------
app.delete('/api/articles/:name/delete-comment', async (req, res) => {
    let client;
    try {
        const { username, text } = req.body;
        const articleName = req.params.name;

        client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        if (!articleInfo) {
            return res.status(404).json({ message: 'Article not found' });
        }

        const updatedComments = (articleInfo.comments || []).filter(
            comment => !(comment.username === username && comment.text === text)
        );

        await db.collection('articles').updateOne(
            { name: articleName },
            { $set: { comments: updatedComments } }
        );

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting comment', error: error.message });
    } finally {
        if (client) {
            await client.close();
        }
    }
});

// -------------------------------- ADD-COMMENT ---------------------------------
app.post('/api/articles/:name/add-comment', async (req, res) => {
    let client;
    try {
        const { username, text } = req.body;
        const articleName = req.params.name;
        client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        const currentComments = articleInfo.comments || [];

        await db.collection('articles').updateOne(
            { name: articleName },
            { $set: { comments: currentComments.concat({ username, text }) } }
        );

        const updatedArticleinfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleinfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding comment', error });
    } finally {
        if (client) await client.close();
    }
});

app.get('/test', (req, res) => {
    res.send('response from server');
});

// ----------------------- START SERVER -------------------------
app.listen(9000, () => {
    console.log('Listening on port 9000');
});
