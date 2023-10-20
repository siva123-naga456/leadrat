import {Component} from 'react'

import SeatArrangement from './components/SeatArrangement'

class App extends Component {
  state = {
    selectedSeats: [],
  }

  handleSeatSelect = seat => {
    const {selectedSeats} = this.state
    if (selectedSeats.includes(seat)) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.filter(
          selectedSeat => selectedSeat !== seat,
        ),
      }))
    } else {
      this.setState(prevState => ({
        selectedSeats: [...prevState.selectedSeats, seat],
      }))
    }
  }

  render() {
    const seats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3']
    const seatAvailability = {
      A1: 'available',
      A2: 'booked',
      A3: 'available',
      B1: 'available',
      B2: 'available',
      B3: 'booked',
    }
    const seatTypes = {
      A1: 'Standard',
      A2: 'Premium',
      A3: 'Premium',
      B1: 'Standard',
      B2: 'Standard',
      B3: 'Premium',
    }

    return (
      <div>
        <h1>Book My Seat</h1>
        <SeatArrangement
          onSeatSelect={this.handleSeatSelect}
          selectedSeats={this.selectedSeats}
          seats={seats}
          seatAvailability={seatAvailability}
          seatTypes={seatTypes}
        />
        <div>
          <h2>Selected Seats</h2>
          <ul>
            {this.state.selectedSeats.map((seat, index) => (
              <li key={index}>{seat}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
