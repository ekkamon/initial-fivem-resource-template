game 'gta5'
lua54 'yes'
fx_version 'adamant'

shared_scripts {
  'config/shared.config.lua'
}

client_scripts {
  'config/client.config.lua',
  'client/variables.lua',
  'client/classes/*.lua',
  'client/functions.lua',
  'client/main.lua'
}

server_scripts {
  'config/server.config.lua',
  'server/variables.lua',
  'server/classes/*.lua',
  'server/functions.lua',
  'server/main.lua'
}

ui_page 'web/dist/index.html'
files {
  'web/dist/**/*'
}