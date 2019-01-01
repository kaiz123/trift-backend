const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://trift:trift@cluster2-shard-00-00-nokdi.mongodb.net:27017,cluster2-shard-00-01-nokdi.mongodb.net:27017,cluster2-shard-00-02-nokdi.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster2-shard-0&authSource=admin&retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
console.log(client)

var itenary

client.connect(err => {
	client.db("thetrift").collection("Oahu").find({}).toArray(function(err, result) {
		console.log(err)
		console.log(result)
		if (err) throw err;
		iternary=result

	});;
	// perform actions on the collection object

	//   var myobj = [
	//   {

	//   	flights: {

	//   		departure: {

	//   			from: "Los Angeles",
	//   			fromAirport: "Los Angeles International Airport LAX",
	//   			to: "Oahu",
	//   			toAirport: "Daniel K. Inouye International Airport HNL",
	//   			name: "Hawaiian",
	//   			departure: "7:00 AM",
	//   			arrival: "11:10 AM",
	//   			duration: "6h 10m",
	//   			details: "Economy Airbus A330 HA 1",
	//   			baggage: "1 Carry On 1 Personal Item Baggage (Carry On)"
	//   		},

	//   		arrival: {

	//   			from: "Oahu",
	//   			fromAirport: "Daniel K. Inouye International Airport HNL",
	//   			to: "Los Angeles",
	//   			toAirport: "Los Angeles International Airport LAX",
	//   			name: "Hawaiian",
	//   			departure: "3:45 PM",
	//   			arrival: "11:05 PM",
	//   			duration: "5h 20m",
	//   			details: "Economy Airbus A330 HA 2",
	//   			baggage: "1 Carry On 1 Personal Item Baggage (Carry On)"
	//   		}
	//   	},

	//   	price: {

	//   		average: {
	//   			cost: "AED 1,400",

	//   		},

	//   		"24-hours": {
	//   			cost: "AED 1,960",
	//   			percentIncrease: "40%",
	//   			days: "24 hours"
	//   		},

	//   		"2-days": {
	//   			cost: "AED 1,988",
	//   			percentIncrease: "30%",
	//   			days: "3 days"
	//   		},

	//   		"5-days": {
	//   			cost: "AED 1,680",
	//   			percentIncrease: "20%",
	//   			days: "5 days"
	//   		},

	//   		"1-week": {
	//   			cost: "AED 1,540",
	//   			percentIncrease: "10%",
	//   			days: "1 week"
	//   		},

	//   		"2-weeks": {
	//   			cost: "AED 1,470",
	//   			percentIncrease: "5%",
	//   			days: "2 week"
	//   		},


	//   	}
	//   },

 //  ];

	// client.db("thetrift").collection("Oahu").insertMany(myobj, function(err, res) {
	//     if (err) throw err;
	//     console.log("Number of documents inserted- " + res.insertedCount);
	 
 //  	});
	client.close();
});



exports.oahu = function (req, res) {
    res.send(iternary);
};