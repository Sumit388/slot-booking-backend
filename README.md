# Slot Booking App - Backend

Welcome to the backend documentation for Sumit's Slot Booking App. This section provides insights into the server-side implementation of the application.
[Link to frontend code](https://github.com/Sumit388/slot-booker)
[Deployed Link](https://slot-booking-backend-y6n8.vercel.app/)

## Technologies Used

- **Backend Framework**: Node.js
- **Database**: PostgreSQL
- **API Development**: Express.js

## Functionality

The backend of Sumit's Slot Booking App serves as the core engine that handles user requests, manages database operations, and ensures seamless communication between the client-side interface and the database.

### Key Features

- **Slot Management**: Manages the creation, retrieval, and modification of slots for appointments.
- **Database Integration**: Integrates with PostgreSQL database using Sequelize ORM for efficient data management.
- **API Endpoints**: Provides RESTful API endpoints for client-server communication.

## Setup Instructions

To set up the backend of Sumit's Slot Booking App, follow these steps:

1. **Clone the Repository**: `git clone git@github.com:Sumit388/slot-booking-backend.git`
2. **Navigate to the Project Directory**: `cd slot-booking-app-backend`
3. **Install Dependencies**: Run `npm install` to install all required dependencies.
4. **Database Configuration**: Configure your PostgreSQL database settings in the `config/config.json` file.
5. Add POSTGRES_URL & PORT variable in the .env file of your project.
6. **Start the Server**: Run `npm run dev` to start the backend server.

## API Endpoints

The following are the available API endpoints provided by the backend:

1. **Get all days that are fully booked within a date range**
   - **Description**: Retrieves all days that are fully booked within a specified date range.
   - **Route**: GET /api/days/bookedDays
   - **Access**: Public

2. **Get booked slots for the day**
   - **Description**: Retrieves all booked slots for a specific day.
   - **Route**: GET /api/slots/getBookedSlotsByDay
   - **Access**: Public

3. **Post a new booked time slot**
   - **Description**: Creates a new booked time slot.
   - **Route**: POST /api/slots/addSlot
   - **Access**: Public

## Contributions

Contributions to the backend of Slot Booking App are welcome. If you encounter any issues, have suggestions for improvements, or want to contribute new features, please feel free to submit a pull request or raise an issue on the GitHub repository.

## Contact

For any inquiries or support regarding the backend of Sumit's Slot Booking App, please contact Sumit Singh at [sumitmishra388@gmail.com](sumitmishra388@gmail.com).

Thank you for using Sumit's Slot Booking App! Happy scheduling!
