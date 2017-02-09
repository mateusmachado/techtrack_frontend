import getCurrentYear from 'util';

const formatMessage = (message) => {
  return message + '...essa msg pertence ao ano de ' + getCurrentYear();
}

export default {
  formatMessage
}
