import { Box, Container, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import faq from "../../assets/Faqs.png";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fade from "@mui/material/Fade";

const faqs = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Why we are different from others?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FAQs = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <Box paddingTop={3}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          fontSize={"16px"}
          color="#2AA7FF"
          textAlign="center"
        >
          Get Your Answer
        </Typography>
        <Typography
          variant="h1"
          color="#1B3C74"
          textAlign="center"
          fontWeight={600}
          fontSize={"32px"}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box src={faq} component="img" width={1} height="auto" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box maxWidth={450} pt={"100px"} pb={"50px"}>
              {faqs.map((item, index) => {
                return (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleExpansion(index)}
                    sx={{
                      width: "100%",
                      minWidth: 0,
                      boxShadow: "none",
                      "&:before": { display: "none" },
                      "&:not(:last-child)": {
                        marginBottom: "20px",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === index ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <Typography
                        component="span"
                        color="#1B3C74"
                        fontWeight={600}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQs;
