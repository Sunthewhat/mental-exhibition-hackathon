"use client";

interface workshopBooking {
  id: number;
  title: string;
  userCount: number;
}

export const getRegisterCountByName = async (name: string) => {
  const datas: workshopBooking[] = await fetch("/api/workshop/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  const workShop = datas.find((data) => data.title === name);
  if (!workShop) {
    throw new Error("Workshop not found by given name (" + name + " )");
  }

  return workShop.userCount;
};

export const updateRegisterCount = async (
  workShop: string,
  date: string
): Promise<number> => {
  return fetch(`/api/workshop/data`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: workShop, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log("Workshop booking updated:", data.updatedBooking);
        console.log("Updated user count:", data.updatedBooking.userCount);
        return Promise.resolve(data.updatedBooking.userCount);
      } else {
        throw new Error(data.error);
      }
    });
};

export const insertToGoogleForm = async (link: string, formData: FormData) => {
  try {
    const response_google_form = await fetch(`/api/workshop/${link}`, {
      method: "POST",
      body: formData,
    });

    if (!response_google_form.ok) {
      throw new Error("Something went wrong (Google form)");
    }

    return await response_google_form.json();
  } catch (err) {
    console.error("Error while insertToGoogleForm ", err);
  }
};
