import "@hotwired/turbo-rails"
import "controllers"

import * as Rails from "https://cdn.jsdelivr.net/npm/@rails/ujs@7.0.0/lib/assets/compiled/rails-ujs.js";
Rails.start();
window.Rails = Rails; // برای اطمینان از دسترسی در کنسول