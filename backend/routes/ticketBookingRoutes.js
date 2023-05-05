import express from "express";
import ticketBookingController from "../controllers/ticketBookingController.js";
const router = express.Router();

router.get('/get-tickets', ticketBookingController.getTickets);
router.post('/book-ticket', ticketBookingController.bookTicket);


export default router;