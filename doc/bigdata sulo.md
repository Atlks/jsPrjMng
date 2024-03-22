


use lucene ,,

search engierr tech

基于Lucene检索引擎我们开发了自己的全文检索系统，承担起后台PB级、万亿条数据记录的检索工作，这里向大家分享下Lucene底层原理研究和一些优化经验。
　　从两个方面介绍：
　　1. Lucene简介和索引原理


1.1 Lucene简介
　　Lucene最初由鼎鼎大名Doug Cutting开发，2000年开源，现在也是开源全文检索方案的不二选择，它的特点概述起来就是：全Java实现、开源、高性能、功能完整、易拓展，功能完整体现在对分词的支持、各种查询方式（前缀、模糊、正则等）、打分高亮、列式存储（DocValues）等等。



# 索引机制  每个字段都有索引自动  快速简单方便维护


但是Elasticsearch会对全部text字段进行索引，必然会消耗巨大的内存，为此Elasticsearch针对索引进行了深度的优化。
但是ES就可以完成这种复杂的操作，默认每个字段都是有索引的，在查询的时候可以各种互相组合



在ES中每个字段都是被索引的，所以不会像MySQL中那样需要对字段进行手动的建立索引。
不需要手动建立索引。这样快速简单方便维护，就是占用资源体积文件。。而且插入性能困难差点。。

Lucene在对文档建立索引的时候，会给词典的所有的元素排好序，在搜索的时候直接根据二分查找的方法进行筛选就能够快速找到数据。


在 Elasticsearch 中， 每个字段的所有数据都是默认被索引的。即每个字段都有为了快速检索设置的专用倒排索引。而且，不像其他多数的数据库，它能在相同的查询中使用所有这些倒排索引，并以惊人的速度返回结果。

索引实际就是一个排序后的数组 [{Idxval,docid},{}]  


# 更新索引模式   单个更新，不要重建


更新索引
复制代码
/**
* 更新索引，会先删除索引，再添加索引
* 相当于 deleteIndex() 和 createIndex()
* @throws IOException
  */
  @Test
  public void updateIndex() throws IOException {
  Document document = new Document();
  document.add(new LongPoint("id", 123456));
  document.add(new StoredField("id", 123456));
  document.add(new IntPoint("age", 20));
  document.add(new StringField("name", "李白", Field.Store.YES));
  document.add(new TextField("poems", "望天门山", Field.Store.YES));
  document.add(new TextField("about", "号青莲居士", Field.Store.NO));

  Directory directory = FSDirectory.open(Paths.get("d:/temp/luceneIndex"));
  Analyzer analyzer = new IKAnalyzer();
  IndexWriterConfig config = new IndexWriterConfig(analyzer);
  IndexWriter indexWriter = new IndexWriter(directory, config);
  indexWriter.updateDocument(new Term("name", "李白"), document);
  indexWriter.commit();
  indexWriter.close();
  }

# 多关键词组合索引



比如说我们要查找同时包含lucene和hadoop的文档，我们只需以下几步：

第一步：取出包含lucene的文档链表

第二步：取出包含hadoop的文档链表

第三步：合并链表，取出交集