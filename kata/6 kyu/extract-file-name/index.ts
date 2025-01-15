class FileNameExtractor {
  static extractFileName(dirtyFileName: string): string {
    const [, filename] = dirtyFileName.match(/\d+_([\w-]+.[\w-]+).\w+/) || [];

    return filename;
  }
}

export default FileNameExtractor;
