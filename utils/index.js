
export function formatMessageDate(dateStringFromServer) {
  const dateObject = new Date(dateStringFromServer);
  const now = new Date();

  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const isSameWeek = (date) => {
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    return date >= startOfWeek && date < endOfWeek;
  };

  const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const getWeekday = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const getDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  if (isSameDay(dateObject, now)) {
    return getTime(dateObject);
  } else if (isSameWeek(dateObject)) {
    return getWeekday(dateObject);
  } else {
    return getDate(dateObject);
  }
}

export function getRandomImageUrl() {
  const randomInt = Math.floor(Math.random() * 75) + 1;
  return `https://xsgames.co/randomusers/assets/avatars/female/${randomInt}.jpg`;
}


export function findMostRecentEntry(response) {
  if (response.status !== "success" || response.status_code !== 200) {
      throw new Error("Invalid response");
  }

  const messages = response.data;

  if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("No data available");
  }

  let mostRecentEntry = messages[0];

  for (let i = 1; i < messages.length; i++) {
      if (new Date(messages[i].updated_at) > new Date(mostRecentEntry.updated_at)) {
          mostRecentEntry = messages[i];
      }
  }

  return mostRecentEntry;
}



 export function sortAndGroupMessagesByDate(messages) {
      messages.sort((a, b) => {
          const dateA = new Date(a.updated_at);
          const dateB = new Date(b.updated_at);
          return dateB - dateA;
      });
  
      const groupedMessages = {};
      messages.forEach(message => {
          const date = new Date(message.updated_at).toLocaleDateString();
          if (!groupedMessages[date]) {
              groupedMessages[date] = [];
          }
          groupedMessages[date].push(message);
      });
  
      const result = Object.keys(groupedMessages).map(date => ({
          date: date,
          messages: groupedMessages[date]
      }));
      
      return result;
  }
