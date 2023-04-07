# PetsOnPoint - Grooming and Boarding for your best friend

This project is a static website for a small business. The idea is to enable clients to schedule appointments online without creating a login. This is done through the Book Now button. This service is through Supersaas API (supersaas.com). This allows aceess to the back end as well if logged in as administrator.

The API key, username and password will be provided to review team. 

Features included are as follows:
1. A node.js express server that serves the API using the native https module in the server.js file (backend). When the API key is added to the URL and link is clicked,  a list of scheduled appointments is displayed in JSON format. This is displayed in localhost:3000. 
2. This data referenced above is still accessible when refreshed.
3. Retrieve data from 3rd party API and diplay within app. The appointments schedule is displayed in index.html and allows a user limited access to create appointments by clicking Book Now button. This data can be retrieved on the front end by logging in as administrator on supersaas.com. If not logged in, this is accessed from server.js through the https link.
4. Regex used on contact.html page to validate email input. When user inputs name and email, there is a popup that advises if email is valid or invalid.
5. A table created from a JSON array is displayed as a table in index.html. The JSON data is in the table.js file.

image credits: Celine Sayuri-Tagami@unsplash.com, tr photography@unsplash.com, unknown source,Photo by Reba Spike@ unsplash.com
   
