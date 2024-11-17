// import React from "react";
// import { Tabs, Container } from "@mantine/core";
// import NavCom from "../NavCom";
// import AddMedicineForm from "./AddMedicine";
// import AddStock from "./AddStock";
// import EditThreshold from "./EditThreshold";
// import ViewStock from "./ViewStock";
// import ExpiredMedicine from "./ExpiredMedicine";
// import RequiredMedicine from "./RequiredMedicine";

// function ManageStock() {
//   const tabsListStyle = {
//     display: "flex",
//     justifyContent: "center", // Keep the tabs centered
//     borderBottom: "1px solid #6D28D9", // Maintain border color for the bottom
//     maxWidth: "100%", // Adjust width of the Tabs list if necessary
//     margin: "0 auto", // Center align the Tabs list
//   };

//   return (
//     <Container size="xxl">
//       <NavCom />
//       <Tabs defaultValue="add-stock">
//         <Tabs.List style={tabsListStyle}>
//           <Tabs.Tab value="add-stock">Add Stock</Tabs.Tab>
//           <Tabs.Tab value="add-medicine">Add Medicine</Tabs.Tab>
//           <Tabs.Tab value="edit-threshold">Edit Threshold</Tabs.Tab>
//           <Tabs.Tab value="expired-medicine">Expired Medicine</Tabs.Tab>
//           <Tabs.Tab value="view-stock">View Stock</Tabs.Tab>
//           <Tabs.Tab value="required-medicine">Required Medicine</Tabs.Tab>
//         </Tabs.List>

//         <Tabs.Panel value="add-stock">
//           <AddStock />
//         </Tabs.Panel>
//         <Tabs.Panel value="add-medicine">
//           <AddMedicineForm />
//         </Tabs.Panel>
//         <Tabs.Panel value="edit-threshold">
//           <EditThreshold />
//         </Tabs.Panel>
//         <Tabs.Panel value="expired-medicine">
//           <ExpiredMedicine />
//         </Tabs.Panel>
//         <Tabs.Panel value="view-stock">
//           <ViewStock />
//         </Tabs.Panel>
//         <Tabs.Panel value="required-medicine">
//           <RequiredMedicine />
//         </Tabs.Panel>
//       </Tabs>

//       <style>{`
//         .mantine-Tabs-tab[data-active] {
//           border-bottom: 3px solid #6d28d9 !important;
//         }
//       `}</style>
//     </Container>
//   );
// }

// export default ManageStock;
import React, { useRef, useState, useEffect } from "react";
import { Flex, Button, Tabs, Text } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "../../../Dashboard/Dashboard.module.css";

function ManageStock() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsListRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const tabItems = [
    { title: "Add Stock", path: "/compounder/manage-stock/addstock" },
    { title: "Add Medicine", path: "/compounder/manage-stock/addmedicine" },
    { title: "Edit Threshold", path: "/compounder/manage-stock/editthreshold" },
    {
      title: "Expired Medicine",
      path: "/compounder/manage-stock/expiredmedicine",
    },
    { title: "ViewStock", path: "/compounder/manage-stock/viewstock" },
    {
      title: "Required Medicine",
      path: "/compounder/manage-stock/requiredMedicine",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = tabItems.findIndex((item) => item.path === currentPath);
    if (activeIndex !== -1) {
      setActiveTab(activeIndex);
    }
  }, [location.pathname]);

  const handleNavigation = (index) => {
    const path = tabItems[index]?.path;
    if (path && window.location.pathname !== path) {
      navigate(path);
    }
  };

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(activeTab + 1, tabItems.length - 1)
        : Math.max(activeTab - 1, 0);

    if (newIndex !== activeTab) {
      setActiveTab(newIndex);
      handleNavigation(newIndex);

      if (tabsListRef.current) {
        tabsListRef.current.scrollBy({
          left: direction === "next" ? 50 : -50,
          behavior: "smooth",
        });
      }
    }
  };

  const navbarStyle = {
    tabsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "16px",
      flexWrap: "wrap",
    },
    button: {
      padding: 0,
      border: "none",
    },
    tabsWrapper: {
      flexGrow: 1,
      overflowX: "auto",
    },
    tabsList: {
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
    },
    tab: {
      flexShrink: 0,
    },
  };

  return (
    <Flex style={navbarStyle.tabsContainer}>
      <Flex justify="flex-start" align="center" gap="1rem" mt="1.5rem" ml="lg">
        <Button
          onClick={() => handleTabChange("prev")}
          variant="default"
          style={navbarStyle.button}
        >
          <CaretCircleLeft weight="light" size={32} />
        </Button>

        <div
          className={classes.fusionTabsContainer}
          ref={tabsListRef}
          style={navbarStyle.tabsWrapper}
        >
          <Tabs
            value={`${activeTab}`}
            onChange={(value) => {
              const newIndex = parseInt(value, 10);
              setActiveTab(newIndex);
              handleNavigation(newIndex);
            }}
          >
            <Tabs.List style={navbarStyle.tabsList}>
              {tabItems.map((item, index) => (
                <Tabs.Tab
                  value={`${index}`}
                  key={index}
                  style={navbarStyle.tab}
                  className={
                    activeTab === index ? classes.fusionActiveRecentTab : ""
                  }
                >
                  <Flex gap="4px">
                    <Text>{item.title || "Untitled"}</Text>
                  </Flex>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </div>

        <Button
          onClick={() => handleTabChange("next")}
          variant="default"
          style={navbarStyle.button}
        >
          <CaretCircleRight weight="light" size={32} />
        </Button>
      </Flex>
      <br />
    </Flex>
  );
}

export default ManageStock;
