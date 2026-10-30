const { runIngestion } = require('./ingest-content.js');

runIngestion().catch((error) => {
    console.error(`CMS ingestion failed: ${error.message}`);
    process.exitCode = 1;
});
