let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));


app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	console.log(sql);
	let data = [userID];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addApplication', (req, res) => {

	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO application_Info(first_name, last_name, address, city, province, postal_code, phone_number, email_address, date_of_birth, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	console.log(sql);
	let data = [req.body.firstName, req.body.lastName, req.body.address, req.body.city, req.body.province, req.body.zip, req.body.phone, req.body.email, req.body.dob, req.body.location];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addSalesEntry', (req, res) => {

	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO sales_Entry(reporting_date, r_volume, r_purchase_price, r_sell_price, r_net_profit, m_volume, m_purchase_price, m_sell_price, m_net_profit, s_volume, s_purchase_price, s_sell_price, s_net_profit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
	console.log(sql);
	let data = [req.body.reportingDate, req.body.regularVolume, req.body.regularPurchasePrice, req.body.regularSellPrice, req.body.regularNetProfit, req.body.mid_gradeVolume, req.body.mid_gradePurchasePrice, req.body.mid_gradeSellPrice, req.body.mid_gradeNetProfit, req.body.premiumVolume, req.body.premiumPurchasePrice, req.body.premiumSellPrice, req.body.premiumNetProfit];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addEmployeeHours', (req, res) => {

	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO employee_hours(first_name, last_name, reporting_date, start_time, end_time, hours_worked) VALUES (?, ?, ?, ?, ?, ?)`;
	console.log(sql);
	let data = [req.body.firstName, req.body.lastName, req.body.reportingDate, req.body.startTime, req.body.endTime, req.body.timeWorked];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addIssue', (req, res) => {

	let connection = mysql.createConnection(config);

	let sql = `INSERT INTO employee_help(first_name, last_name, issue) VALUES (?, ?, ?)`;
	console.log(sql);
	let data = [req.body.firstName, req.body.lastName, req.body.issue];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		console.log(results);
		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});





app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
