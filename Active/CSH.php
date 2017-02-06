create table T_WenZhang
              (ID int(4) not null auto_increment primary key,
              LX varchar(1),
              ZT varchar(36),
              FBT varchar(128),
              CJSJ datetime,
              NR varchar(999999)
              )
              engine=myisam default charset=utf8;

create table T_FuJian
              (ID int(4) not null auto_increment primary key,
              LX varchar(1),
              URL varchar(128),
              CJSJ datetime)
              engine=myisam default charset=utf8;

create table T_Admin
              (ID int(4) not null auto_increment primary key,
              NAME varchar(18),
              PWD varchar(18),
              SFDL varchar(1),
              LX varchar(1),
              MC varchar(36),
              DZ varchar(128),
              YJ varchar(36),
              DH varchar(36),
              SFZZ varchar(1),
              CSNY datetime,
              XB varchar(2),
              XL varchar(18),
              ZY varchar(18),
              YWLY varchar(18),
              ZC varchar(18),
              ZW varchar(18),
              DW varchar(18),
              JL varchar(526),
              QYLX varchar(18),
              LXR varchar(18),
              TBZT1 int(1),
              TBZT2 int(1),
              TBZT3 int(1),
              TBZT4 int(1),
              TBZT5 int(1),
              FZCS varchar(18))
              engine=myisam default charset=utf8;
create table T_QiYe
              (ID int(4) not null auto_increment primary key,
              pID int(4),
              TKBH VARCHAR(36),
              ZL VARCHAR(128),
              SY VARCHAR(128),
              YJZBXH int(2),
              YJZB VARCHAR(36),
              EJZBXH int(2),
              EJZB  VARCHAR(36),
              TK VARCHAR(360000),
              BZ VARCHAR(128),
              JCYID int(4),
              JCYPF VARCHAR(2),
              WJZJID int(4),
              WJSHPD  VARCHAR(1),
              WJSHDF int(4),
              XCZJID int(4),
              XCYZJL  VARCHAR(128),
              XCYZDF int(4),
              PGPY  VARCHAR(128))
              engine=myisam default charset=utf8;
 
        //评语库
        $sql5 = "create table T_PYK
              (ID int(4) not null auto_increment primary key,
              NR VARCHAR(128),
              TKBH VARCHAR(36)
              )
              engine=myisam default charset=utf8;
create table T_ZB
              (ID int(4) not null auto_increment primary key,
              QYLX VARCHAR(18),
              YJZBXH int(2),
              YJZB VARCHAR(36),
              EJZBXH int(2),
              EJZB  VARCHAR(36),
              TKBH  VARCHAR(36),
              TK VARCHAR(360000)
              )
              engine=myisam default charset=utf8;
