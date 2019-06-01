function selectIcon(iconClassArray, weatherImg, updateTime) {
  const hour = updateTime.match(/^\d{2}/)[0]
  //截取数组，只保留icon
  iconClassArray.length = 1

  switch (weatherImg) {
    case "qing":
      if (hour >= 20 || hour <= 4) {
        iconClassArray.push("clear-night")
      } else {
        iconClassArray.push("clear-day")
      }
      break

    case "yin":
      iconClassArray.push("cloudy")
      break

    case "yun":
      if (hour >= 20 || hour <= 4) {
        iconClassArray.push("partly-cloudy-night")
      } else {
        iconClassArray.push("partly-cloudy-day")
      }
      break

    case "yu":
      iconClassArray.push("rain")
      break

    case "xue":
      iconClassArray.push("snow")
      break

    case "wu":
      iconClassArray.push("fog")
      break

    case "bingbao":
      iconClassArray.push("hail")
      break

    case "lei":
      iconClassArray.push("thunderstorm")
      break

    case "shachen":
      iconClassArray.push("tornado")
      break
  }
}

export default selectIcon
