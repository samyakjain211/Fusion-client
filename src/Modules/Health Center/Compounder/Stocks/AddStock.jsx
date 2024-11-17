import React from "react";
import {
  TextInput,
  Button,
  Group,
  Paper,
  Divider,
  FileInput,
} from "@mantine/core";
import { MagnifyingGlass, DownloadSimple } from "@phosphor-icons/react";

function AddStock() {
  return (
    <Paper
      withBorder
      shadow="md"
      radius="md"
      p="lg"
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        marginTop: "20px",
        width: "100%",
        minHeight: "500px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "400",
          marginBottom: "1rem",
        }}
      >
        Insert Data using Excel File
      </div>

      <form>
        <FileInput
          label="Report"
          id="report"
          placeholder="Choose File"
          mb="sm"
        />

        <Group position="center" mt="lg">
          <Button
            type="submit"
            style={{ backgroundColor: "#15ABFF" }} // Custom purple color for submit button
          >
            Submit
          </Button>
          <Button
            variant="outline"
            leftIcon={<DownloadSimple size={20} />}
            style={{ borderColor: "#15ABFF", color: "#15ABFF" }} // Custom purple outline and text color
          >
            Download Example
          </Button>
        </Group>
      </form>

      <Divider my="lg" label="OR" labelPosition="center" />
      <form>
        <TextInput
          label="Brand Name"
          id="brand-name"
          placeholder="Brand Name"
          rightSection={
            <Button
              variant="filled"
              color="#15ABFF" // Changed to custom purple color
              size="xs"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#15ABFF", // Ensure custom color is applied
              }}
            >
              <MagnifyingGlass size={20} weight="fill" />
              Search
            </Button>
          }
          mb="sm"
          styles={{ rightSection: { width: "100px" } }} // Adjust width for consistency
        />
        <TextInput
          label="Quantity"
          id="quantity"
          placeholder="Quantity"
          mb="sm"
        />
        <TextInput
          label="Supplier"
          id="supplier"
          placeholder="Supplier"
          mb="sm"
        />
        <TextInput label="Expiry Date" id="expiry-date" type="date" mb="sm" />
        <TextInput
          label="Medicine Name"
          id="medicine-name"
          placeholder="Medicine Name"
          mb="sm"
        />
        <TextInput
          label="Constituents"
          id="constituents"
          placeholder="Constituents"
          mb="sm"
        />
        <TextInput
          label="Manufacturer Name"
          id="manufacturer-name"
          placeholder="Manufacturer Name"
          mb="sm"
        />
        <TextInput
          label="Pack Size Label"
          id="pack-size"
          placeholder="Pack Size"
          mb="sm"
        />

        <Group position="center" mt="lg">
          <Button type="submit" style={{ backgroundColor: "#15ABFF" }}>
            Submit
          </Button>
        </Group>
      </form>
    </Paper>
  );
}

export default AddStock;
