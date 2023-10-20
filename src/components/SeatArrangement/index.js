import SeatsComponent from './components/SeatsComponent'

const SeatArrangement = props => {
  const {
    onSeatSelect,
    selectedSeats,
    seats,
    seatAvailability,
    seatTypes,
  } = props

  return (
    <div>
      {seats.map((seat, index) => (
        <SeatsComponent
          key={index}
          seat={seat}
          seatAvailability={seatAvailability[seat]}
          seatType={seatTypes[seat]}
          onSeatSelect={onSeatSelect}
          selectedSeats={selectedSeats}
        />
      ))}
    </div>
  )
}

export default SeatArrangement
