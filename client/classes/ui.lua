Classes.UI = function()
  local self = {}

  self.status = 'CLOSE'
  
  self.open = function()
    self.status = 'OPEN'
    SendNUIMessage({
      action = 'SET_VISIBLE',
      data = {
        status = true
      }
    })
  end
  
  self.close = function()
    self.status = 'CLOSE'
    SendNUIMessage({
      action = 'SET_VISIBLE',
      data = {
        status = false
      }
    })
    if xCamera then
      xCamera.reset()
    end
  end

  self.focus = function(focus, cursor)
    SetNuiFocus(focus, cursor)
  end

  self.isOpen = function()
    return self.status == 'OPEN' and true or false
  end

  return self
end

xUI = Classes.UI()