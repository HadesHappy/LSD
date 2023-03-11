const showAddress = (address) => {
  if (address)
    return address.slice(0, 5) + '...' + address.slice(-4)
  else
    return ''
}

export {
  showAddress
} 