在创建使用IOT上，我们要强调Primary Key的作用。对一般的堆表而言，Primary Key是可有可无的。一种说法是：当一个堆表没有设置主键的时候，rowid伪列就是对应的主键值。而且，Primary Key可以在数据表创建之后进行追加设置。



但是，IOT对于主键的设置格外严格，要求创建表的时候就必须指定明确的主键列。下面我们通过一系列的实验来证明，实验环境为Oracle 11g。


我们使用相同的结构，来创建出IOT和Heap Table对照。



--不指定主键，是无法创建IOT；

SQL> create table m (id number) organization index;


但是IOT表可以不同。索引和数据保留在一起，理论上拿到了叶子节点，也就是拿到了数据行。IOT是不存在回表操作的，所以相对heap table来说，回表部分成本是节省的。