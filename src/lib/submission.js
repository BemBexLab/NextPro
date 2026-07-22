import Swal from "sweetalert2";

const successText = "Thanks for reaching out. We will get back to you shortly.";
const errorText = "Your message could not be sent right now. Please try again.";

export function showSubmissionLoading() {
  Swal.fire({
    title: "Sending your request...",
    text: "Please wait while we deliver your message.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    customClass: {
      popup: "rounded-3xl",
      title: "text-[#002768]",
      confirmButton: "rounded-full px-6 py-3",
    },
  });
}

export async function submitSubmission(payload) {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.error || "Unknown error");
  }

  return data;
}

export async function showSubmissionSuccess(text = successText) {
  Swal.close();

  await Swal.fire({
    icon: "success",
    title: "Message sent!",
    text,
    confirmButtonText: "Great",
    confirmButtonColor: "#002768",
    background: "#ffffff",
    color: "#1f2937",
    customClass: {
      popup: "rounded-3xl",
      confirmButton: "rounded-full px-6 py-3",
    },
  });
}

export async function showSubmissionError(text = errorText) {
  Swal.close();

  await Swal.fire({
    icon: "error",
    title: "Something went wrong",
    text,
    confirmButtonText: "Try again",
    confirmButtonColor: "#dc2626",
    background: "#ffffff",
    color: "#1f2937",
    customClass: {
      popup: "rounded-3xl",
      confirmButton: "rounded-full px-6 py-3",
    },
  });
}

export async function showServiceRequiredWarning() {
  await Swal.fire({
    icon: "warning",
    title: "Select a service",
    text: "Please choose a service before submitting the form.",
    confirmButtonText: "OK",
    confirmButtonColor: "#BF0B30",
    background: "#ffffff",
    color: "#1f2937",
    customClass: {
      popup: "rounded-3xl",
      confirmButton: "rounded-full px-6 py-3",
    },
  });
}
