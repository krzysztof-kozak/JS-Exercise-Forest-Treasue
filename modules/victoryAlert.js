import swal from 'sweetalert';

const victoryAlert = () =>
  swal({
    title: 'Congratulations',
    text: 'You found the treasue!',
    icon: 'success',
    button: 'Cool',
  });

export default victoryAlert;
