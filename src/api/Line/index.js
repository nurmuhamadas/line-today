import Axios from 'axios';

const BASE_URL = 'https://today.line.me/id/portaljson';

class LineApi {
  static async getDataByCategory(name) {
    try {
      const { data } = await Axios.get(BASE_URL);
      const categoryData = data.result.categories
        .find((category) => category.name === name).templates;
      const filteredData = categoryData.filter((article) => (
        article.title !== undefined && article.sections[0].articles.length > 0
      ));
      const finalData = filteredData.map((listData) => {
        const { id, title } = listData;
        let { articles } = listData.sections[0];
        articles = articles.map((article) => ({
          ...article,
          imageUrl: `https://obs.line-scdn.net/${article.thumbnail.hash}`,
        }));

        return { id, title, articles };
      });

      return finalData;
    } catch (err) {
      throw Error(err);
    }
  }

  static async getCategoryList() {
    try {
      const { data } = await Axios.get(BASE_URL);
      return data.result.categoryList;
    } catch (err) {
      throw Error(err);
    }
  }
}

export default LineApi;
