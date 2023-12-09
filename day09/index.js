function adjustLights(lights) {
  const green = lights.filter((light) => light === '🟢').length
  const red = lights.length - green
  let changes = 0
  if (green > red) {
    for (let i = 0; i < lights.length; i++) {
      if (i % 2 === 0) {
        if (lights[i] !== '🟢') {
          changes++
        }
      } else {
        if (lights[i] !== '🔴') {
          changes++
        }
      }
    }
  } else if (red > green) {
    for (let i = 0; i < lights.length; i++) {
      if (i % 2 === 0) {
        if (lights[i] !== '🔴') {
          changes++
        }
      } else {
        if (lights[i] !== '🟢') {
          changes++
        }
      }
    }
  } else {
    if (lights[0] === '🟢') {
      for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 0) {
          if (lights[i] !== '🟢') {
            changes++
          }
        } else {
          if (lights[i] !== '🔴') {
            changes++
          }
        }
      }
    } else {
      for (let i = 0; i < lights.length; i++) {
        if (i % 2 === 0) {
          if (lights[i] !== '🔴') {
            changes++
          }
        } else {
          if (lights[i] !== '🟢') {
            changes++
          }
        }
      }
    }
  }

  return changes
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])

module.exports = adjustLights
