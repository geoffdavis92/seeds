# app
require 'sinatra'
require 'sinatra/json'
require 'json'
require 'sass'

# settings
set :haml, :format => :html5
set :layout_options => { :views => 'views', :layouts => 'layouts' }
set :public_folder, File.dirname(__FILE__) + '/assets'