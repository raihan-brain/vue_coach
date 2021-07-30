let UUID = 0;

export default function UniqueID(): {
  getID: () => number;
} {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
}
