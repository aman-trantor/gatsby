const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.AppName}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
