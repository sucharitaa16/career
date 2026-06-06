// const puppeteer = require("puppeteer-core");
// const { generateResumeHTML } = require("../templates/resume.template");

// exports.generatePDF = async (data) => {

//   const html = generateResumeHTML(data);

//   const browser = await puppeteer.launch({
//   channel: "chrome",
//   headless: true
// });


//   const page = await browser.newPage();
//   await page.setContent(html, { waitUntil: "networkidle0" });

//   const pdfBuffer = await page.pdf({
//     format: "A4",
//     printBackground: true
//   });

//   await browser.close();

//   return pdfBuffer;
// };



const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");
const { generateResumeHTML } = require("../templates/resume.template");

// exports.generatePDF = async (data) => {

//   const html = generateResumeHTML(data);

//   const browser = await puppeteer.launch({
//     executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//     headless: true,
//     args: ["--no-sandbox", "--disable-setuid-sandbox"]
//   });

//   const page = await browser.newPage();
//   await page.setContent(html, { waitUntil: "networkidle0" });

//   const fileName = `resume-${Date.now()}.pdf`;
//   const filePath = path.join(__dirname, "../../", fileName);

//   await page.pdf({
//     path: filePath,
//     format: "A4",
//     printBackground: true
//   });

//   await browser.close();

//   return filePath; // return file path instead of buffer
// };

exports.generatePDF = async (data) => {
  const html = generateResumeHTML(data);

  // Check if we are running on Render (Render sets the NODE_ENV or RENDER env var)
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