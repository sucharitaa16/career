const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");
const { generateCoverLetterHTML } = require("../templates/cover.template");

exports.generatePDFBuffer = async (data) => {

  const html = generateCoverLetterHTML(data);

  const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER;
  
    const launchOptions = {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
    };
  
    // Only use the hardcoded Windows path if we are running locally
    if (!isProduction) {
      launchOptions.executablePath = "C:/Program Files/Google/Chrome/Application/chrome.exe" || "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";
    }
  
    const browser = await puppeteer.launch(launchOptions);
  
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
  
    const fileName = `resume-${Date.now()}.pdf`;
    
    // Render filesystem note: writing to __dirname is fine, 
    // but remember Render's disk is ephemeral unless you use a persistent disk.
    const filePath = path.join(__dirname, "../../", fileName);
  
    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true
    });
  
    await browser.close();
  
    return filePath; 
  };