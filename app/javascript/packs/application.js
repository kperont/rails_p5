// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// My JS Stuff
require('packs/drag_and_drop')
require('p4')
require('setAccordion')
require('updatePlan')

// JQuery Stuff
require('jquery')
require('jquery-ui')
require('datatables.net')
require('datatables.net-bs4')