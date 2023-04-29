const xlsx = require('xlsx');
const insertData = require("../services/insertData")

module.exports = (req, res) => {
    try {
        console.log("upload got hit")
        const file = req.file;
        console.log("file",req.file)
    
        // Use xlsx module to read the Excel file
        const workbook = xlsx.readFile(file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);
        insertData(data, serviceHandler);
        function serviceHandler(status, result){
            status? res.status(200).json({sucess: true, message: "Data is successfully uploaded to database", result, data}) : res.status(500).json({message: "Could'nt insert data into database.", result})
        }
    } catch (e) {
        res.status(500).json({message: "Something went wrong."});
    }
}