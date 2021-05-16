const express = require('express');
const products = require('./src/scripts/products.js');
const features = require('./src/scripts/features.js');
const bodyParser = require('body-parser');

const bot = require('./src/scripts/telegraph')

const port = 3000;
const requestCallChatId = '-512903700'

const app = express();

bot.launch()

bot.telegram.sendMessage(
	requestCallChatId,
	'Ping'
)

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + '/node_modules/axios/dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 


app.get('/', (req, res) => {
	res.render(
		'index',
		{
			title: "da",
			message: "11",
			button: "123",
			products,
			features,
			featuresTitle: "Наши преимущества"
		})
})

app.get('/product', (req, res) => {
	res.render(
		'product',
		{
			title: "Shirt",
			prise: "",
			message: "Самса́ или само́са — самостоятельное блюдо, схожее с пирожком, произвольной (квадратной, треугольной или округлой) формы с начинкой.",
			featuresTitle: "Наши преимущества"
		})
})

app.get('/api/request-call', (req, res) => {
	console.log("Запрос: ", req.query);
	bot.telegram.sendMessage(
		requestCallChatId,
		`Новая заявка:
		Имя клиента: ${req.query.name}
		Почта клиента: ${req.query.email}
		Телефон клиента: ${req.query.phone}`
	)
	res.redirect('/');
})

app.listen(port, () => {
	console.log(`Сервер запущен на порте ${port}`);
})

