interface IJsonStringify {
  [key: string]: unknown;
}

export function jsonStringify(obj: IJsonStringify) {
  try {
    return JSON.stringify(obj, null, 2);
  } catch (error) {
    console.error("Failed to stringify the object:", error);

    return "Failed to stringify the object";
  }
}
