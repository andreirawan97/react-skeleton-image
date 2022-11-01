export function omitObjectKeys(
  obj: Record<string, unknown>,
  omittedKeys: string[]
) {
  const tmpObj = { ...obj };

  omittedKeys.forEach((omittedKey) => {
    delete tmpObj[omittedKey];
  });

  return tmpObj;
}
