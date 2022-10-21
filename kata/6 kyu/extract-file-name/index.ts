class FileNameExtractor {
  static extractFileName(dirtyFileName: string): string {
    const [_, filename] = dirtyFileName.match(/\d+_([\w-]+.[\w-]+).\w+/) || [];

    return filename;
  }
}

export default FileNameExtractor;
