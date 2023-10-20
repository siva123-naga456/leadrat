const SeatsComponent = props => {
  const {seat, seatAvailability, seatType, onSeatSelect, selectedSeats} = props
  const isSeatAvailable = seatAvailability === 'available'
  const isSelected = selectedSeats.includes(seat)
  return (
    <div
      className={`seat ${isSeatAvailable ? 'available' : 'booked'} ${
        isSelected ? 'selected' : ''
      }`}
      onClick={() => {
        if (isSeatAvailable) {
          onSeatSelect(seat)
        }
      }}
    >
      {seat} ({seatType})
    </div>
  )
}

export default SeatsComponent
