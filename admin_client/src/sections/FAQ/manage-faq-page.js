import React, { useState, useEffect } from "react";
import { createFaq, deleteFaq, getFaq, updateFaq } from "src/services/faq";
import FaqList from "./faq-list";
import { Box, Stack, Typography, Button, SvgIcon, TextField } from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import ConfirmationModal from "src/components/ConfirmationModal";

function ManageFaqPage() {
  const { accessToken } = useAuthContext();

  const [faqs, setFaqs] = useState([]);

  const [openCreateFaqModal, setOpenCreateFaqModal] = useState(false);
  const [createFaqForm, setCreateFaqForm] = useState({
    question: "",
    answer: "",
  });

  const [openUpdateFaqModal, setOpenUpdateFaqModal] = useState(false);
  const [updateFaqForm, setUpdateFaqForm] = useState({
    question: "",
    answer: "",
  });

  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  useEffect(() => {
    try {
      const fetchAllFaqs = async () => {
        const res = await getFaq(accessToken);
        setFaqs(res?.data);
        console.log(res);
      };

      fetchAllFaqs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCreateFAQ = async () => {
    const faqData = {
      question: createFaqForm?.question,
      answer: createFaqForm?.answer,
    };

    const res = await createFaq(faqData, accessToken);

    if (res.status == 200) {
      setFaqs((prev) => [...prev, { id: res?.data.id, ...faqData }]);
      setCreateFaqForm({ question: "", answer: "" });
      setOpenCreateFaqModal(false);
    }
    console.log(res);
  };

  const handleUpdateFAQ = async () => {
    const faqData = {
      id: updateFaqForm?.id,
      question: updateFaqForm?.question,
      answer: updateFaqForm?.answer,
    };

    try {
      const res = await updateFaq(updateFaqForm?.id, faqData, accessToken);
      if (res.status === 200) {
        console.log(res);
        setFaqs((prev) =>
          prev.map((item) =>
            item.id === updateFaqForm?.id
              ? { id: item.id, question: updateFaqForm?.question, answer: updateFaqForm?.answer }
              : item
          )
        );

        setUpdateFaqForm({
          id: "",
          question: "",
          answer: "",
        });
        setOpenUpdateFaqModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFaq = async () => {
    const res = await deleteFaq(updateFaqForm?.id, accessToken);
    if (res.status == 200) {
      setFaqs((prev) => {
        // console.log(
        //   prev.map((item) => {
        //     console.log(item);
        //     if (item.id != updateFaqForm.id) return item;
        //   })
        // );
        return prev
          .map((item) => {
            console.log(item);
            if (item.id != updateFaqForm.id) return item;
            return null;
          })
          .filter(Boolean);
      });

      setUpdateFaqForm({
        id: "",
        question: "",
        answer: "",
      });

      setDeleteConfirmationModalOpen(false);
      setOpenUpdateFaqModal(false);
    }

    console.log(res);
  };

  const handleCreateFaqFormChange = (event) => {
    const { name, value } = event.target;
    setCreateFaqForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateFaqFormChange = (event) => {
    const { name, value } = event.target;
    setUpdateFaqForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFaqClicked = (faq) => {
    setUpdateFaqForm({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
    });

    setOpenUpdateFaqModal(true);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        px: 10,
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={4}>
        <Typography variant="h5">FAQs</Typography>

        <Box>
          <Button
            startIcon={
              <SvgIcon fontSize="small">
                <PlusIcon />
              </SvgIcon>
            }
            variant="contained"
            onClick={() => {
              setOpenCreateFaqModal(true);
            }}
          >
            Add
          </Button>
        </Box>
      </Stack>

      <FaqList faqs={faqs} setFaqs={setFaqs} handleFaqClicked={handleFaqClicked} />

      <CustomModal
        open={openCreateFaqModal}
        onClose={() => {
          setOpenCreateFaqModal(false);
        }}
        maxWidth={500}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5">Create a FAQ</Typography>
          <TextField
            label="Question"
            multiline
            rows={2}
            name="question"
            value={createFaqForm?.question}
            onChange={handleCreateFaqFormChange}
            fullWidth
          />
          <TextField
            label="Answer"
            multiline
            rows={2}
            name="answer"
            value={createFaqForm?.answer}
            onChange={handleCreateFaqFormChange}
            fullWidth
          />
          <Button variant="contained" onClick={handleCreateFAQ}>
            Submit
          </Button>
        </Stack>
      </CustomModal>

      <CustomModal
        open={openUpdateFaqModal}
        onClose={() => {
          setOpenUpdateFaqModal(false);
        }}
        maxWidth={500}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5">Update FAQ</Typography>
          <TextField
            label="Question"
            multiline
            rows={2}
            name="question"
            value={updateFaqForm?.question}
            onChange={handleUpdateFaqFormChange}
            fullWidth
          />
          <TextField
            label="Answer"
            multiline
            rows={2}
            name="answer"
            value={updateFaqForm?.answer}
            onChange={handleUpdateFaqFormChange}
            fullWidth
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleUpdateFAQ}>
              Submit
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "error.main",
                "&:hover": {
                  backgroundColor: "error.dark",
                },
              }}
              onClick={() => {
                setDeleteConfirmationModalOpen(true);
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CustomModal>

      <ConfirmationModal
        open={deleteConfirmationModalOpen}
        onClose={() => {
          setDeleteConfirmationModalOpen(false);
        }}
        message="Are you sure you want to delete this FAQ?"
        noMessage="No, leave it"
        yesMessage="Yes, delete it"
        execFunction={handleDeleteFaq}
      />
    </Box>
  );
}

export default ManageFaqPage;
