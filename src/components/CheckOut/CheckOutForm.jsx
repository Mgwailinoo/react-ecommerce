import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutForm = () => (
  <form onSubmit="" autoComplete="off">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="first-name"
          name="firstName"
          label="First Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="first-name"
          name="lastName"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="address"
          name="address"
          label="Address line 1"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required fullWidth id="city" name="city" label="City" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="post-code"
          name="postCode"
          label="Zip / Postal code"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-country-select-label">
            Shipping Country
          </InputLabel>
          <Select
            required
            name="shippingCountry"
            id="shipping-country-select"
            labelId="shipping-country-select-label"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-subdivision-select-label">
            Shipping Subdivision
          </InputLabel>
          <Select
            required
            name="shippingSubdivision"
            id="shipping-subdivision-select"
            labelId="shipping-subdivision-select-label"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-options-select-label">
            Shipping Options
          </InputLabel>
          <Select
            required
            name="shippingOptions"
            id="shipping-options-select"
            labelId="shipping-options-select-label"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

    <div style={{ display: "flex", gap: "20px", padding: "15px 0" }}>
      <Button size="medium" to="/cart" component={Link} variant="contained">
        Go Back
      </Button>
      <Button type="submit" size="medium" color="secondary" variant="contained">
        Next
      </Button>
    </div>
  </form>
);

export default CheckoutForm;
