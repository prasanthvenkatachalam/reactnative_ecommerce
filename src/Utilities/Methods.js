export const getAmountFormat = num => {
  num.toString().replace('₹', '');
  return (
    '₹ ' +
    parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
};

export const sliceText = (text = '', sliceEndIndex = 0, endText = '...') => {
  return text.slice(0, sliceEndIndex) + (text.length >= 40 ? endText : '');
};
